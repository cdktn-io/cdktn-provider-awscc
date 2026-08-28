# `dataAwsccServicediscoveryPublicDnsNamespace` Submodule <a name="`dataAwsccServicediscoveryPublicDnsNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicediscoveryPublicDnsNamespace <a name="DataAwsccServicediscoveryPublicDnsNamespace" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_public_dns_namespace awscc_servicediscovery_public_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace(scope: Construct, id: string, config: DataAwsccServicediscoveryPublicDnsNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig">DataAwsccServicediscoveryPublicDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig">DataAwsccServicediscoveryPublicDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccServicediscoveryPublicDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccServicediscoveryPublicDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccServicediscoveryPublicDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_public_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicediscoveryPublicDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId">publicDnsNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList">DataAwsccServicediscoveryPublicDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.properties"></a>

```typescript
public readonly properties: DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference</a>

---

##### `publicDnsNamespaceId`<sup>Required</sup> <a name="publicDnsNamespaceId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.publicDnsNamespaceId"></a>

```typescript
public readonly publicDnsNamespaceId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tags"></a>

```typescript
public readonly tags: DataAwsccServicediscoveryPublicDnsNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList">DataAwsccServicediscoveryPublicDnsNamespaceTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicediscoveryPublicDnsNamespaceConfig <a name="DataAwsccServicediscoveryPublicDnsNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPublicDnsNamespaceConfig: dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_public_dns_namespace#id DataAwsccServicediscoveryPublicDnsNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicediscoveryPublicDnsNamespaceProperties <a name="DataAwsccServicediscoveryPublicDnsNamespaceProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPublicDnsNamespaceProperties: dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties = { ... }
```


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties: dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties = { ... }
```


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa: dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa = { ... }
```


### DataAwsccServicediscoveryPublicDnsNamespaceTags <a name="DataAwsccServicediscoveryPublicDnsNamespaceTags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPublicDnsNamespaceTags: dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```typescript
public readonly soa: DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsProperties</a>

---


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties">dnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties">DataAwsccServicediscoveryPublicDnsNamespaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsProperties`<sup>Required</sup> <a name="dnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```typescript
public readonly dnsProperties: DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPublicDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPublicDnsNamespaceProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceProperties">DataAwsccServicediscoveryPublicDnsNamespaceProperties</a>

---


### DataAwsccServicediscoveryPublicDnsNamespaceTagsList <a name="DataAwsccServicediscoveryPublicDnsNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference <a name="DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPublicDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags">DataAwsccServicediscoveryPublicDnsNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPublicDnsNamespaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPublicDnsNamespace.DataAwsccServicediscoveryPublicDnsNamespaceTags">DataAwsccServicediscoveryPublicDnsNamespaceTags</a>

---



