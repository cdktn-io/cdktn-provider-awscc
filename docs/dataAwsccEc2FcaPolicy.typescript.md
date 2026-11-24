# `dataAwsccEc2FcaPolicy` Submodule <a name="`dataAwsccEc2FcaPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2FcaPolicy <a name="DataAwsccEc2FcaPolicy" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy awscc_ec2_fca_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy(scope: Construct, id: string, config: DataAwsccEc2FcaPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig">DataAwsccEc2FcaPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig">DataAwsccEc2FcaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2FcaPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isConstruct"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformElement"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2FcaPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2FcaPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2FcaPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2FcaPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fcaPolicyId">fcaPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.instanceFcaPolicyDocument">instanceFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.latestVersion">latestVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.natFcaPolicyDocument">natFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.networkResourceType">networkResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.ownerAccount">ownerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.pcxFcaPolicyDocument">pcxFcaPolicyDocument</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.policyCreatedAt">policyCreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.showBackEnabled">showBackEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList">DataAwsccEc2FcaPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.versionExpectedEffectiveAt">versionExpectedEffectiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fcaPolicyId`<sup>Required</sup> <a name="fcaPolicyId" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.fcaPolicyId"></a>

```typescript
public readonly fcaPolicyId: string;
```

- *Type:* string

---

##### `instanceFcaPolicyDocument`<sup>Required</sup> <a name="instanceFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.instanceFcaPolicyDocument"></a>

```typescript
public readonly instanceFcaPolicyDocument: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a>

---

##### `latestVersion`<sup>Required</sup> <a name="latestVersion" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.latestVersion"></a>

```typescript
public readonly latestVersion: number;
```

- *Type:* number

---

##### `natFcaPolicyDocument`<sup>Required</sup> <a name="natFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.natFcaPolicyDocument"></a>

```typescript
public readonly natFcaPolicyDocument: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference</a>

---

##### `networkResourceType`<sup>Required</sup> <a name="networkResourceType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.networkResourceType"></a>

```typescript
public readonly networkResourceType: string;
```

- *Type:* string

---

##### `ownerAccount`<sup>Required</sup> <a name="ownerAccount" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.ownerAccount"></a>

```typescript
public readonly ownerAccount: string;
```

- *Type:* string

---

##### `pcxFcaPolicyDocument`<sup>Required</sup> <a name="pcxFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.pcxFcaPolicyDocument"></a>

```typescript
public readonly pcxFcaPolicyDocument: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference</a>

---

##### `policyCreatedAt`<sup>Required</sup> <a name="policyCreatedAt" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.policyCreatedAt"></a>

```typescript
public readonly policyCreatedAt: string;
```

- *Type:* string

---

##### `showBackEnabled`<sup>Required</sup> <a name="showBackEnabled" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.showBackEnabled"></a>

```typescript
public readonly showBackEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2FcaPolicyTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList">DataAwsccEc2FcaPolicyTagsList</a>

---

##### `versionExpectedEffectiveAt`<sup>Required</sup> <a name="versionExpectedEffectiveAt" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.versionExpectedEffectiveAt"></a>

```typescript
public readonly versionExpectedEffectiveAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2FcaPolicyConfig <a name="DataAwsccEc2FcaPolicyConfig" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyConfig: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/data-sources/ec2_fca_policy#id DataAwsccEc2FcaPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyInstanceFcaPolicyDocument: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument = { ... }
```


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications = { ... }
```


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes = { ... }
```


### DataAwsccEc2FcaPolicyNatFcaPolicyDocument <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyNatFcaPolicyDocument: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument = { ... }
```


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications = { ... }
```


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes = { ... }
```


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocument <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocument" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyPcxFcaPolicyDocument: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument = { ... }
```


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications = { ... }
```


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes = { ... }
```


### DataAwsccEc2FcaPolicyTags <a name="DataAwsccEc2FcaPolicyTags" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

const dataAwsccEc2FcaPolicyTags: dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```typescript
public readonly prefixes: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference <a name="DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument">DataAwsccEc2FcaPolicyInstanceFcaPolicyDocument</a>

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```typescript
public readonly prefixes: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference <a name="DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument">DataAwsccEc2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyNatFcaPolicyDocument;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyNatFcaPolicyDocument">DataAwsccEc2FcaPolicyNatFcaPolicyDocument</a>

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```typescript
public readonly prefixes: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixesType`<sup>Required</sup> <a name="prefixesType" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```typescript
public readonly prefixesType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidrLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrLabel`<sup>Required</sup> <a name="cidrLabel" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```typescript
public readonly cidrLabel: string;
```

- *Type:* string

---

##### `cidrRange`<sup>Required</sup> <a name="cidrRange" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```typescript
public readonly cidrRange: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference <a name="DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidrRangeSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity">reportingGranularity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument">DataAwsccEc2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrRangeSpecifications`<sup>Required</sup> <a name="cidrRangeSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```typescript
public readonly cidrRangeSpecifications: DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: string[];
```

- *Type:* string[]

---

##### `reportingGranularity`<sup>Required</sup> <a name="reportingGranularity" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```typescript
public readonly reportingGranularity: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyPcxFcaPolicyDocument;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyPcxFcaPolicyDocument">DataAwsccEc2FcaPolicyPcxFcaPolicyDocument</a>

---


### DataAwsccEc2FcaPolicyTagsList <a name="DataAwsccEc2FcaPolicyTagsList" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2FcaPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2FcaPolicyTagsOutputReference <a name="DataAwsccEc2FcaPolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2FcaPolicy } from '@cdktn/provider-awscc'

new dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags">DataAwsccEc2FcaPolicyTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2FcaPolicyTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2FcaPolicy.DataAwsccEc2FcaPolicyTags">DataAwsccEc2FcaPolicyTags</a>

---



