# `dataAwsccApigatewayVpcLink` Submodule <a name="`dataAwsccApigatewayVpcLink` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayVpcLink <a name="DataAwsccApigatewayVpcLink" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_vpc_link awscc_apigateway_vpc_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.Initializer"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

new dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink(scope: Construct, id: string, config: DataAwsccApigatewayVpcLinkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig">DataAwsccApigatewayVpcLinkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig">DataAwsccApigatewayVpcLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayVpcLink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isConstruct"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformElement"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformDataSource"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.generateConfigForImport"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccApigatewayVpcLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccApigatewayVpcLink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccApigatewayVpcLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_vpc_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayVpcLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList">DataAwsccApigatewayVpcLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.targetArns">targetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.vpcLinkId">vpcLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.tags"></a>

```typescript
public readonly tags: DataAwsccApigatewayVpcLinkTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList">DataAwsccApigatewayVpcLinkTagsList</a>

---

##### `targetArns`<sup>Required</sup> <a name="targetArns" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.targetArns"></a>

```typescript
public readonly targetArns: string[];
```

- *Type:* string[]

---

##### `vpcLinkId`<sup>Required</sup> <a name="vpcLinkId" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.vpcLinkId"></a>

```typescript
public readonly vpcLinkId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLink.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayVpcLinkConfig <a name="DataAwsccApigatewayVpcLinkConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.Initializer"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

const dataAwsccApigatewayVpcLinkConfig: dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/apigateway_vpc_link#id DataAwsccApigatewayVpcLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccApigatewayVpcLinkTags <a name="DataAwsccApigatewayVpcLinkTags" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTags.Initializer"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

const dataAwsccApigatewayVpcLinkTags: dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayVpcLinkTagsList <a name="DataAwsccApigatewayVpcLinkTagsList" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.Initializer"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

new dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.get"></a>

```typescript
public get(index: number): DataAwsccApigatewayVpcLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccApigatewayVpcLinkTagsOutputReference <a name="DataAwsccApigatewayVpcLinkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccApigatewayVpcLink } from '@cdktn/provider-awscc'

new dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTags">DataAwsccApigatewayVpcLinkTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccApigatewayVpcLinkTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayVpcLink.DataAwsccApigatewayVpcLinkTags">DataAwsccApigatewayVpcLinkTags</a>

---



