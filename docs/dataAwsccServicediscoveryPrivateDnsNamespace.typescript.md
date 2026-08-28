# `dataAwsccServicediscoveryPrivateDnsNamespace` Submodule <a name="`dataAwsccServicediscoveryPrivateDnsNamespace` Submodule" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccServicediscoveryPrivateDnsNamespace <a name="DataAwsccServicediscoveryPrivateDnsNamespace" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_private_dns_namespace awscc_servicediscovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace(scope: Construct, id: string, config: DataAwsccServicediscoveryPrivateDnsNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig">DataAwsccServicediscoveryPrivateDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig">DataAwsccServicediscoveryPrivateDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isConstruct"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformElement"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformDataSource"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccServicediscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccServicediscoveryPrivateDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccServicediscoveryPrivateDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccServicediscoveryPrivateDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId">privateDnsNamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList">DataAwsccServicediscoveryPrivateDnsNamespaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.vpc">vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `privateDnsNamespaceId`<sup>Required</sup> <a name="privateDnsNamespaceId" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.privateDnsNamespaceId"></a>

```typescript
public readonly privateDnsNamespaceId: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.properties"></a>

```typescript
public readonly properties: DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tags"></a>

```typescript
public readonly tags: DataAwsccServicediscoveryPrivateDnsNamespaceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList">DataAwsccServicediscoveryPrivateDnsNamespaceTagsList</a>

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.vpc"></a>

```typescript
public readonly vpc: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccServicediscoveryPrivateDnsNamespaceConfig <a name="DataAwsccServicediscoveryPrivateDnsNamespaceConfig" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPrivateDnsNamespaceConfig: dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/servicediscovery_private_dns_namespace#id DataAwsccServicediscoveryPrivateDnsNamespace#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccServicediscoveryPrivateDnsNamespaceProperties <a name="DataAwsccServicediscoveryPrivateDnsNamespaceProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPrivateDnsNamespaceProperties: dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties = { ... }
```


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties: dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties = { ... }
```


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa: dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa = { ... }
```


### DataAwsccServicediscoveryPrivateDnsNamespaceTags <a name="DataAwsccServicediscoveryPrivateDnsNamespaceTags" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

const dataAwsccServicediscoveryPrivateDnsNamespaceTags: dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa">soa</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `soa`<sup>Required</sup> <a name="soa" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.soa"></a>

```typescript
public readonly soa: DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsProperties</a>

---


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesSoa</a>

---


### DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties">dnsProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties">DataAwsccServicediscoveryPrivateDnsNamespaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsProperties`<sup>Required</sup> <a name="dnsProperties" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.dnsProperties"></a>

```typescript
public readonly dnsProperties: DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference">DataAwsccServicediscoveryPrivateDnsNamespacePropertiesDnsPropertiesOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespacePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPrivateDnsNamespaceProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceProperties">DataAwsccServicediscoveryPrivateDnsNamespaceProperties</a>

---


### DataAwsccServicediscoveryPrivateDnsNamespaceTagsList <a name="DataAwsccServicediscoveryPrivateDnsNamespaceTagsList" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.get"></a>

```typescript
public get(index: number): DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference <a name="DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccServicediscoveryPrivateDnsNamespace } from '@cdktn/provider-awscc'

new dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags">DataAwsccServicediscoveryPrivateDnsNamespaceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccServicediscoveryPrivateDnsNamespaceTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccServicediscoveryPrivateDnsNamespace.DataAwsccServicediscoveryPrivateDnsNamespaceTags">DataAwsccServicediscoveryPrivateDnsNamespaceTags</a>

---



