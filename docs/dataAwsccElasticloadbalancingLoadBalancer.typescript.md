# `dataAwsccElasticloadbalancingLoadBalancer` Submodule <a name="`dataAwsccElasticloadbalancingLoadBalancer` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingLoadBalancer <a name="DataAwsccElasticloadbalancingLoadBalancer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer(scope: Construct, id: string, config: DataAwsccElasticloadbalancingLoadBalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig">DataAwsccElasticloadbalancingLoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig">DataAwsccElasticloadbalancingLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isConstruct"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticloadbalancingLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticloadbalancingLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/elasticloadbalancing_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.accessLoggingPolicy">accessLoggingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy">appCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName">canonicalHostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId">canonicalHostedZoneNameId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy">connectionDrainingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionSettings">connectionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.crossZone">crossZone</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference">DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy">lbCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.listeners">listeners</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList">DataAwsccElasticloadbalancingLoadBalancerListenersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.sourceSecurityGroup">sourceSecurityGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList">DataAwsccElasticloadbalancingLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accessLoggingPolicy`<sup>Required</sup> <a name="accessLoggingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.accessLoggingPolicy"></a>

```typescript
public readonly accessLoggingPolicy: DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a>

---

##### `appCookieStickinessPolicy`<sup>Required</sup> <a name="appCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy"></a>

```typescript
public readonly appCookieStickinessPolicy: DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `canonicalHostedZoneName`<sup>Required</sup> <a name="canonicalHostedZoneName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName"></a>

```typescript
public readonly canonicalHostedZoneName: string;
```

- *Type:* string

---

##### `canonicalHostedZoneNameId`<sup>Required</sup> <a name="canonicalHostedZoneNameId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId"></a>

```typescript
public readonly canonicalHostedZoneNameId: string;
```

- *Type:* string

---

##### `connectionDrainingPolicy`<sup>Required</sup> <a name="connectionDrainingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy"></a>

```typescript
public readonly connectionDrainingPolicy: DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a>

---

##### `connectionSettings`<sup>Required</sup> <a name="connectionSettings" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionSettings"></a>

```typescript
public readonly connectionSettings: DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a>

---

##### `crossZone`<sup>Required</sup> <a name="crossZone" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.crossZone"></a>

```typescript
public readonly crossZone: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.healthCheck"></a>

```typescript
public readonly healthCheck: DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference">DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `lbCookieStickinessPolicy`<sup>Required</sup> <a name="lbCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy"></a>

```typescript
public readonly lbCookieStickinessPolicy: DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a>

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.listeners"></a>

```typescript
public readonly listeners: DataAwsccElasticloadbalancingLoadBalancerListenersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList">DataAwsccElasticloadbalancingLoadBalancerListenersList</a>

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.policies"></a>

```typescript
public readonly policies: DataAwsccElasticloadbalancingLoadBalancerPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesList</a>

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `sourceSecurityGroup`<sup>Required</sup> <a name="sourceSecurityGroup" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.sourceSecurityGroup"></a>

```typescript
public readonly sourceSecurityGroup: DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tags"></a>

```typescript
public readonly tags: DataAwsccElasticloadbalancingLoadBalancerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList">DataAwsccElasticloadbalancingLoadBalancerTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerConfig <a name="DataAwsccElasticloadbalancingLoadBalancerConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerConfig: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/elasticloadbalancing_load_balancer#id DataAwsccElasticloadbalancingLoadBalancer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerConnectionSettings <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionSettings" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerConnectionSettings: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerHealthCheck <a name="DataAwsccElasticloadbalancingLoadBalancerHealthCheck" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerHealthCheck: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerListeners <a name="DataAwsccElasticloadbalancingLoadBalancerListeners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerListeners: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerPolicies <a name="DataAwsccElasticloadbalancingLoadBalancerPolicies" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerPolicies: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup <a name="DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup = { ... }
```


### DataAwsccElasticloadbalancingLoadBalancerTags <a name="DataAwsccElasticloadbalancingLoadBalancerTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

const dataAwsccElasticloadbalancingLoadBalancerTags: dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval">emitInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emitInterval`<sup>Required</sup> <a name="emitInterval" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval"></a>

```typescript
public readonly emitInterval: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `s3BucketPrefix`<sup>Required</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix"></a>

```typescript
public readonly s3BucketPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList <a name="DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings">DataAwsccElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerConnectionSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings">DataAwsccElasticloadbalancingLoadBalancerConnectionSettings</a>

---


### DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck">DataAwsccElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerHealthCheck;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck">DataAwsccElasticloadbalancingLoadBalancerHealthCheck</a>

---


### DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList <a name="DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieExpirationPeriod`<sup>Required</sup> <a name="cookieExpirationPeriod" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```typescript
public readonly cookieExpirationPeriod: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerListenersList <a name="DataAwsccElasticloadbalancingLoadBalancerListenersList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort">instancePort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol">instanceProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort">loadBalancerPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames">policyNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId">sslCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners">DataAwsccElasticloadbalancingLoadBalancerListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort"></a>

```typescript
public readonly instancePort: string;
```

- *Type:* string

---

##### `instanceProtocol`<sup>Required</sup> <a name="instanceProtocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol"></a>

```typescript
public readonly instanceProtocol: string;
```

- *Type:* string

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort"></a>

```typescript
public readonly loadBalancerPort: string;
```

- *Type:* string

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames"></a>

```typescript
public readonly policyNames: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sslCertificateId`<sup>Required</sup> <a name="sslCertificateId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId"></a>

```typescript
public readonly sslCertificateId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerListeners;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners">DataAwsccElasticloadbalancingLoadBalancerListeners</a>

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes</a>

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesList <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts">instancePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts">loadBalancerPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies">DataAwsccElasticloadbalancingLoadBalancerPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes"></a>

```typescript
public readonly attributes: DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList</a>

---

##### `instancePorts`<sup>Required</sup> <a name="instancePorts" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts"></a>

```typescript
public readonly instancePorts: string[];
```

- *Type:* string[]

---

##### `loadBalancerPorts`<sup>Required</sup> <a name="loadBalancerPorts" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts"></a>

```typescript
public readonly loadBalancerPorts: string[];
```

- *Type:* string[]

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerPolicies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies">DataAwsccElasticloadbalancingLoadBalancerPolicies</a>

---


### DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias">ownerAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias"></a>

```typescript
public readonly ownerAlias: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup</a>

---


### DataAwsccElasticloadbalancingLoadBalancerTagsList <a name="DataAwsccElasticloadbalancingLoadBalancerTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.get"></a>

```typescript
public get(index: number): DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccElasticloadbalancingLoadBalancer } from '@cdktn/provider-awscc'

new dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags">DataAwsccElasticloadbalancingLoadBalancerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccElasticloadbalancingLoadBalancerTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags">DataAwsccElasticloadbalancingLoadBalancerTags</a>

---



