# `dataAwsccEc2IpamPrefixListResolver` Submodule <a name="`dataAwsccEc2IpamPrefixListResolver` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2IpamPrefixListResolver <a name="DataAwsccEc2IpamPrefixListResolver" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_prefix_list_resolver awscc_ec2_ipam_prefix_list_resolver}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver(scope: Construct, id: string, config: DataAwsccEc2IpamPrefixListResolverConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig">DataAwsccEc2IpamPrefixListResolverConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig">DataAwsccEc2IpamPrefixListResolverConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2IpamPrefixListResolver resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2IpamPrefixListResolver to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2IpamPrefixListResolver that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_prefix_list_resolver#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2IpamPrefixListResolver to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamArn">ipamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamId">ipamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverArn">ipamPrefixListResolverArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverId">ipamPrefixListResolverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList">DataAwsccEc2IpamPrefixListResolverRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList">DataAwsccEc2IpamPrefixListResolverTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipamArn`<sup>Required</sup> <a name="ipamArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamArn"></a>

```typescript
public readonly ipamArn: string;
```

- *Type:* string

---

##### `ipamId`<sup>Required</sup> <a name="ipamId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamId"></a>

```typescript
public readonly ipamId: string;
```

- *Type:* string

---

##### `ipamPrefixListResolverArn`<sup>Required</sup> <a name="ipamPrefixListResolverArn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverArn"></a>

```typescript
public readonly ipamPrefixListResolverArn: string;
```

- *Type:* string

---

##### `ipamPrefixListResolverId`<sup>Required</sup> <a name="ipamPrefixListResolverId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.ipamPrefixListResolverId"></a>

```typescript
public readonly ipamPrefixListResolverId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.rules"></a>

```typescript
public readonly rules: DataAwsccEc2IpamPrefixListResolverRulesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList">DataAwsccEc2IpamPrefixListResolverRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2IpamPrefixListResolverTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList">DataAwsccEc2IpamPrefixListResolverTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolver.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamPrefixListResolverConfig <a name="DataAwsccEc2IpamPrefixListResolverConfig" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPrefixListResolverConfig: dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam_prefix_list_resolver#id DataAwsccEc2IpamPrefixListResolver#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamPrefixListResolverRules <a name="DataAwsccEc2IpamPrefixListResolverRules" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPrefixListResolverRules: dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules = { ... }
```


### DataAwsccEc2IpamPrefixListResolverRulesConditions <a name="DataAwsccEc2IpamPrefixListResolverRulesConditions" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPrefixListResolverRulesConditions: dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions = { ... }
```


### DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag: dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag = { ... }
```


### DataAwsccEc2IpamPrefixListResolverTags <a name="DataAwsccEc2IpamPrefixListResolverTags" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

const dataAwsccEc2IpamPrefixListResolverTags: dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamPrefixListResolverRulesConditionsList <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion">resourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag">resourceTag</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions">DataAwsccEc2IpamPrefixListResolverRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `resourceRegion`<sup>Required</sup> <a name="resourceRegion" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceRegion"></a>

```typescript
public readonly resourceRegion: string;
```

- *Type:* string

---

##### `resourceTag`<sup>Required</sup> <a name="resourceTag" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.resourceTag"></a>

```typescript
public readonly resourceTag: DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPrefixListResolverRulesConditions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditions">DataAwsccEc2IpamPrefixListResolverRulesConditions</a>

---


### DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag">DataAwsccEc2IpamPrefixListResolverRulesConditionsResourceTag</a>

---


### DataAwsccEc2IpamPrefixListResolverRulesList <a name="DataAwsccEc2IpamPrefixListResolverRulesList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamPrefixListResolverRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamPrefixListResolverRulesOutputReference <a name="DataAwsccEc2IpamPrefixListResolverRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList">DataAwsccEc2IpamPrefixListResolverRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId">ipamScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.staticCidr">staticCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules">DataAwsccEc2IpamPrefixListResolverRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.conditions"></a>

```typescript
public readonly conditions: DataAwsccEc2IpamPrefixListResolverRulesConditionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesConditionsList">DataAwsccEc2IpamPrefixListResolverRulesConditionsList</a>

---

##### `ipamScopeId`<sup>Required</sup> <a name="ipamScopeId" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ipamScopeId"></a>

```typescript
public readonly ipamScopeId: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `staticCidr`<sup>Required</sup> <a name="staticCidr" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.staticCidr"></a>

```typescript
public readonly staticCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPrefixListResolverRules;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverRules">DataAwsccEc2IpamPrefixListResolverRules</a>

---


### DataAwsccEc2IpamPrefixListResolverTagsList <a name="DataAwsccEc2IpamPrefixListResolverTagsList" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2IpamPrefixListResolverTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2IpamPrefixListResolverTagsOutputReference <a name="DataAwsccEc2IpamPrefixListResolverTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2IpamPrefixListResolver } from '@cdktn/provider-awscc'

new dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags">DataAwsccEc2IpamPrefixListResolverTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2IpamPrefixListResolverTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2IpamPrefixListResolver.DataAwsccEc2IpamPrefixListResolverTags">DataAwsccEc2IpamPrefixListResolverTags</a>

---



