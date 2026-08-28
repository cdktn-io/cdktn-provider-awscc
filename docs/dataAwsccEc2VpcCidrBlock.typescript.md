# `dataAwsccEc2VpcCidrBlock` Submodule <a name="`dataAwsccEc2VpcCidrBlock` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VpcCidrBlock <a name="DataAwsccEc2VpcCidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_vpc_cidr_block awscc_ec2_vpc_cidr_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.Initializer"></a>

```typescript
import { dataAwsccEc2VpcCidrBlock } from '@cdktn/provider-awscc'

new dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock(scope: Construct, id: string, config: DataAwsccEc2VpcCidrBlockConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig">DataAwsccEc2VpcCidrBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig">DataAwsccEc2VpcCidrBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VpcCidrBlock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isConstruct"></a>

```typescript
import { dataAwsccEc2VpcCidrBlock } from '@cdktn/provider-awscc'

dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformElement"></a>

```typescript
import { dataAwsccEc2VpcCidrBlock } from '@cdktn/provider-awscc'

dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2VpcCidrBlock } from '@cdktn/provider-awscc'

dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2VpcCidrBlock } from '@cdktn/provider-awscc'

dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2VpcCidrBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2VpcCidrBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2VpcCidrBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_vpc_cidr_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VpcCidrBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock">amazonProvidedIpv6CidrBlock</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipSource">ipSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv4IpamPoolId">ipv4IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv4NetmaskLength">ipv4NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6AddressAttribute">ipv6AddressAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup">ipv6CidrBlockNetworkBorderGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6IpamPoolId">ipv6IpamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6NetmaskLength">ipv6NetmaskLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6Pool">ipv6Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.vpcCidrBlockId">vpcCidrBlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `amazonProvidedIpv6CidrBlock`<sup>Required</sup> <a name="amazonProvidedIpv6CidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.amazonProvidedIpv6CidrBlock"></a>

```typescript
public readonly amazonProvidedIpv6CidrBlock: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `ipSource`<sup>Required</sup> <a name="ipSource" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipSource"></a>

```typescript
public readonly ipSource: string;
```

- *Type:* string

---

##### `ipv4IpamPoolId`<sup>Required</sup> <a name="ipv4IpamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv4IpamPoolId"></a>

```typescript
public readonly ipv4IpamPoolId: string;
```

- *Type:* string

---

##### `ipv4NetmaskLength`<sup>Required</sup> <a name="ipv4NetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv4NetmaskLength"></a>

```typescript
public readonly ipv4NetmaskLength: number;
```

- *Type:* number

---

##### `ipv6AddressAttribute`<sup>Required</sup> <a name="ipv6AddressAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6AddressAttribute"></a>

```typescript
public readonly ipv6AddressAttribute: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6CidrBlockNetworkBorderGroup`<sup>Required</sup> <a name="ipv6CidrBlockNetworkBorderGroup" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6CidrBlockNetworkBorderGroup"></a>

```typescript
public readonly ipv6CidrBlockNetworkBorderGroup: string;
```

- *Type:* string

---

##### `ipv6IpamPoolId`<sup>Required</sup> <a name="ipv6IpamPoolId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6IpamPoolId"></a>

```typescript
public readonly ipv6IpamPoolId: string;
```

- *Type:* string

---

##### `ipv6NetmaskLength`<sup>Required</sup> <a name="ipv6NetmaskLength" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6NetmaskLength"></a>

```typescript
public readonly ipv6NetmaskLength: number;
```

- *Type:* number

---

##### `ipv6Pool`<sup>Required</sup> <a name="ipv6Pool" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.ipv6Pool"></a>

```typescript
public readonly ipv6Pool: string;
```

- *Type:* string

---

##### `vpcCidrBlockId`<sup>Required</sup> <a name="vpcCidrBlockId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.vpcCidrBlockId"></a>

```typescript
public readonly vpcCidrBlockId: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlock.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VpcCidrBlockConfig <a name="DataAwsccEc2VpcCidrBlockConfig" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.Initializer"></a>

```typescript
import { dataAwsccEc2VpcCidrBlock } from '@cdktn/provider-awscc'

const dataAwsccEc2VpcCidrBlockConfig: dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VpcCidrBlock.DataAwsccEc2VpcCidrBlockConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_vpc_cidr_block#id DataAwsccEc2VpcCidrBlock#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



