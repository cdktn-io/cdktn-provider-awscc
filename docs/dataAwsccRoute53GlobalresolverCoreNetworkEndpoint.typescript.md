# `dataAwsccRoute53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`dataAwsccRoute53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpoint <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint(scope: Construct, id: string, config: DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig">DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig">DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverCoreNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.availableRegions">availableRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">coreNetworkEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">globalResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">ipAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `availableRegions`<sup>Required</sup> <a name="availableRegions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```typescript
public readonly availableRegions: string[];
```

- *Type:* string[]

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `coreNetworkEndpointId`<sup>Required</sup> <a name="coreNetworkEndpointId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```typescript
public readonly coreNetworkEndpointId: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `globalResolverId`<sup>Required</sup> <a name="globalResolverId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```typescript
public readonly globalResolverId: string;
```

- *Type:* string

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```typescript
public readonly tags: DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

const dataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig: dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/route53globalresolver_core_network_endpoint#id DataAwsccRoute53GlobalresolverCoreNetworkEndpoint#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

const dataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses: dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses = { ... }
```


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

const dataAwsccRoute53GlobalresolverCoreNetworkEndpointTags: dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```typescript
public get(index: number): DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">dnsLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">ipv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">regionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsLabel`<sup>Required</sup> <a name="dnsLabel" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```typescript
public readonly dnsLabel: string;
```

- *Type:* string

---

##### `ipv4Address`<sup>Required</sup> <a name="ipv4Address" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```typescript
public readonly ipv4Address: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `regionScope`<sup>Required</sup> <a name="regionScope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```typescript
public readonly regionScope: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses">DataAwsccRoute53GlobalresolverCoreNetworkEndpointIpAddresses</a>

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverCoreNetworkEndpoint } from '@cdktn/provider-awscc'

new dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverCoreNetworkEndpoint.DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags">DataAwsccRoute53GlobalresolverCoreNetworkEndpointTags</a>

---



