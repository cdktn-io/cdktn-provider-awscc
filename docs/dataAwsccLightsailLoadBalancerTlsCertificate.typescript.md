# `dataAwsccLightsailLoadBalancerTlsCertificate` Submodule <a name="`dataAwsccLightsailLoadBalancerTlsCertificate` Submodule" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccLightsailLoadBalancerTlsCertificate <a name="DataAwsccLightsailLoadBalancerTlsCertificate" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.Initializer"></a>

```typescript
import { dataAwsccLightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

new dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate(scope: Construct, id: string, config: DataAwsccLightsailLoadBalancerTlsCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig">DataAwsccLightsailLoadBalancerTlsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig">DataAwsccLightsailLoadBalancerTlsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccLightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isConstruct"></a>

```typescript
import { dataAwsccLightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformElement"></a>

```typescript
import { dataAwsccLightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformDataSource"></a>

```typescript
import { dataAwsccLightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.generateConfigForImport"></a>

```typescript
import { dataAwsccLightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccLightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccLightsailLoadBalancerTlsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccLightsailLoadBalancerTlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccLightsailLoadBalancerTlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames">certificateAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.certificateDomainName">certificateDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled">httpsRedirectionEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.isAttached">isAttached</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn">loadBalancerTlsCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `certificateAlternativeNames`<sup>Required</sup> <a name="certificateAlternativeNames" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames"></a>

```typescript
public readonly certificateAlternativeNames: string[];
```

- *Type:* string[]

---

##### `certificateDomainName`<sup>Required</sup> <a name="certificateDomainName" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.certificateDomainName"></a>

```typescript
public readonly certificateDomainName: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `httpsRedirectionEnabled`<sup>Required</sup> <a name="httpsRedirectionEnabled" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled"></a>

```typescript
public readonly httpsRedirectionEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `isAttached`<sup>Required</sup> <a name="isAttached" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.isAttached"></a>

```typescript
public readonly isAttached: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

---

##### `loadBalancerTlsCertificateArn`<sup>Required</sup> <a name="loadBalancerTlsCertificateArn" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn"></a>

```typescript
public readonly loadBalancerTlsCertificateArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccLightsailLoadBalancerTlsCertificateConfig <a name="DataAwsccLightsailLoadBalancerTlsCertificateConfig" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.Initializer"></a>

```typescript
import { dataAwsccLightsailLoadBalancerTlsCertificate } from '@cdktn/provider-awscc'

const dataAwsccLightsailLoadBalancerTlsCertificateConfig: dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccLightsailLoadBalancerTlsCertificate.DataAwsccLightsailLoadBalancerTlsCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/lightsail_load_balancer_tls_certificate#id DataAwsccLightsailLoadBalancerTlsCertificate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



