# `dataAwsccEc2LaunchTemplate` Submodule <a name="`dataAwsccEc2LaunchTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LaunchTemplate <a name="DataAwsccEc2LaunchTemplate" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_launch_template awscc_ec2_launch_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate(scope: Construct, id: string, config: DataAwsccEc2LaunchTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig">DataAwsccEc2LaunchTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig">DataAwsccEc2LaunchTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2LaunchTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isConstruct"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformElement"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformDataSource"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEc2LaunchTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2LaunchTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2LaunchTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_launch_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LaunchTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.defaultVersionNumber">defaultVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.latestVersionNumber">latestVersionNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateData">launchTemplateData</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateId">launchTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateName">launchTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList">DataAwsccEc2LaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `defaultVersionNumber`<sup>Required</sup> <a name="defaultVersionNumber" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.defaultVersionNumber"></a>

```typescript
public readonly defaultVersionNumber: string;
```

- *Type:* string

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.latestVersionNumber"></a>

```typescript
public readonly latestVersionNumber: string;
```

- *Type:* string

---

##### `launchTemplateData`<sup>Required</sup> <a name="launchTemplateData" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateData"></a>

```typescript
public readonly launchTemplateData: DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference</a>

---

##### `launchTemplateId`<sup>Required</sup> <a name="launchTemplateId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateId"></a>

```typescript
public readonly launchTemplateId: string;
```

- *Type:* string

---

##### `launchTemplateName`<sup>Required</sup> <a name="launchTemplateName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateName"></a>

```typescript
public readonly launchTemplateName: string;
```

- *Type:* string

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: DataAwsccEc2LaunchTemplateTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList">DataAwsccEc2LaunchTemplateTagSpecificationsList</a>

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LaunchTemplateConfig <a name="DataAwsccEc2LaunchTemplateConfig" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateConfig: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_launch_template#id DataAwsccEc2LaunchTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LaunchTemplateLaunchTemplateData <a name="DataAwsccEc2LaunchTemplateLaunchTemplateData" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateData: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications = { ... }
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags = { ... }
```


### DataAwsccEc2LaunchTemplateTagSpecifications <a name="DataAwsccEc2LaunchTemplateTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateTagSpecifications: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications = { ... }
```


### DataAwsccEc2LaunchTemplateTagSpecificationsTags <a name="DataAwsccEc2LaunchTemplateTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

const dataAwsccEc2LaunchTemplateTagSpecificationsTags: dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```typescript
public readonly encrypted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.ebs"></a>

```typescript
public readonly ebs: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacityReservationResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```typescript
public readonly capacityReservationId: string;
```

- *Type:* string

---

##### `capacityReservationResourceGroupArn`<sup>Required</sup> <a name="capacityReservationResourceGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```typescript
public readonly capacityReservationResourceGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacityReservationPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacityReservationTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityReservationPreference`<sup>Required</sup> <a name="capacityReservationPreference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```typescript
public readonly capacityReservationPreference: string;
```

- *Type:* string

---

##### `capacityReservationTarget`<sup>Required</sup> <a name="capacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```typescript
public readonly capacityReservationTarget: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.amdSevSnp">amdSevSnp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.coreCount">coreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.threadsPerCore">threadsPerCore</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amdSevSnp`<sup>Required</sup> <a name="amdSevSnp" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.amdSevSnp"></a>

```typescript
public readonly amdSevSnp: string;
```

- *Type:* string

---

##### `coreCount`<sup>Required</sup> <a name="coreCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.coreCount"></a>

```typescript
public readonly coreCount: number;
```

- *Type:* number

---

##### `threadsPerCore`<sup>Required</sup> <a name="threadsPerCore" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.threadsPerCore"></a>

```typescript
public readonly threadsPerCore: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.cpuCredits">cpuCredits</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuCredits`<sup>Required</sup> <a name="cpuCredits" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.cpuCredits"></a>

```typescript
public readonly cpuCredits: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.configured"></a>

```typescript
public readonly configured: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.marketType">marketType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.spotOptions">spotOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `marketType`<sup>Required</sup> <a name="marketType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.marketType"></a>

```typescript
public readonly marketType: string;
```

- *Type:* string

---

##### `spotOptions`<sup>Required</sup> <a name="spotOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```typescript
public readonly spotOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">blockDurationMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">instanceInterruptionBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">maxPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">spotInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">validUntil</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockDurationMinutes`<sup>Required</sup> <a name="blockDurationMinutes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```typescript
public readonly blockDurationMinutes: number;
```

- *Type:* number

---

##### `instanceInterruptionBehavior`<sup>Required</sup> <a name="instanceInterruptionBehavior" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```typescript
public readonly instanceInterruptionBehavior: string;
```

- *Type:* string

---

##### `maxPrice`<sup>Required</sup> <a name="maxPrice" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```typescript
public readonly maxPrice: string;
```

- *Type:* string

---

##### `spotInstanceType`<sup>Required</sup> <a name="spotInstanceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```typescript
public readonly spotInstanceType: string;
```

- *Type:* string

---

##### `validUntil`<sup>Required</sup> <a name="validUntil" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```typescript
public readonly validUntil: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references">references</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references"></a>

```typescript
public readonly references: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily">instanceFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceFamily`<sup>Required</sup> <a name="instanceFamily" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily"></a>

```typescript
public readonly instanceFamily: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu">cpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu"></a>

```typescript
public readonly cpu: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorManufacturers">acceleratorManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorNames">acceleratorNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB">acceleratorTotalMemoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTypes">acceleratorTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.bareMetal">bareMetal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baselineEbsBandwidthMbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselinePerformanceFactors">baselinePerformanceFactors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.burstablePerformance">burstablePerformance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.cpuManufacturers">cpuManufacturers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.excludedInstanceTypes">excludedInstanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.instanceGenerations">instanceGenerations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorage">localStorage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorageTypes">localStorageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">maxSpotPriceAsPercentageOfOptimalOnDemandPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryGiBPerVCpu">memoryGiBPerVCpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryMiB">memoryMiB</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkBandwidthGbps">networkBandwidthGbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkInterfaceCount">networkInterfaceCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">onDemandMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.requireHibernateSupport">requireHibernateSupport</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spotMaxPricePercentageOverLowestPrice</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.totalLocalStorageGb">totalLocalStorageGb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.vCpuCount">vCpuCount</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```typescript
public readonly acceleratorCount: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `acceleratorManufacturers`<sup>Required</sup> <a name="acceleratorManufacturers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```typescript
public readonly acceleratorManufacturers: string[];
```

- *Type:* string[]

---

##### `acceleratorNames`<sup>Required</sup> <a name="acceleratorNames" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```typescript
public readonly acceleratorNames: string[];
```

- *Type:* string[]

---

##### `acceleratorTotalMemoryMiB`<sup>Required</sup> <a name="acceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB"></a>

```typescript
public readonly acceleratorTotalMemoryMiB: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `acceleratorTypes`<sup>Required</sup> <a name="acceleratorTypes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```typescript
public readonly acceleratorTypes: string[];
```

- *Type:* string[]

---

##### `allowedInstanceTypes`<sup>Required</sup> <a name="allowedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```typescript
public readonly allowedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `bareMetal`<sup>Required</sup> <a name="bareMetal" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.bareMetal"></a>

```typescript
public readonly bareMetal: string;
```

- *Type:* string

---

##### `baselineEbsBandwidthMbps`<sup>Required</sup> <a name="baselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```typescript
public readonly baselineEbsBandwidthMbps: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `baselinePerformanceFactors`<sup>Required</sup> <a name="baselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselinePerformanceFactors"></a>

```typescript
public readonly baselinePerformanceFactors: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference</a>

---

##### `burstablePerformance`<sup>Required</sup> <a name="burstablePerformance" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```typescript
public readonly burstablePerformance: string;
```

- *Type:* string

---

##### `cpuManufacturers`<sup>Required</sup> <a name="cpuManufacturers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```typescript
public readonly cpuManufacturers: string[];
```

- *Type:* string[]

---

##### `excludedInstanceTypes`<sup>Required</sup> <a name="excludedInstanceTypes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```typescript
public readonly excludedInstanceTypes: string[];
```

- *Type:* string[]

---

##### `instanceGenerations`<sup>Required</sup> <a name="instanceGenerations" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```typescript
public readonly instanceGenerations: string[];
```

- *Type:* string[]

---

##### `localStorage`<sup>Required</sup> <a name="localStorage" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorage"></a>

```typescript
public readonly localStorage: string;
```

- *Type:* string

---

##### `localStorageTypes`<sup>Required</sup> <a name="localStorageTypes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```typescript
public readonly localStorageTypes: string[];
```

- *Type:* string[]

---

##### `maxSpotPriceAsPercentageOfOptimalOnDemandPrice`<sup>Required</sup> <a name="maxSpotPriceAsPercentageOfOptimalOnDemandPrice" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```typescript
public readonly maxSpotPriceAsPercentageOfOptimalOnDemandPrice: number;
```

- *Type:* number

---

##### `memoryGiBPerVCpu`<sup>Required</sup> <a name="memoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryGiBPerVCpu"></a>

```typescript
public readonly memoryGiBPerVCpu: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference</a>

---

##### `memoryMiB`<sup>Required</sup> <a name="memoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryMiB"></a>

```typescript
public readonly memoryMiB: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference</a>

---

##### `networkBandwidthGbps`<sup>Required</sup> <a name="networkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```typescript
public readonly networkBandwidthGbps: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `networkInterfaceCount`<sup>Required</sup> <a name="networkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```typescript
public readonly networkInterfaceCount: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `onDemandMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="onDemandMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly onDemandMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `requireHibernateSupport`<sup>Required</sup> <a name="requireHibernateSupport" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```typescript
public readonly requireHibernateSupport: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `spotMaxPricePercentageOverLowestPrice`<sup>Required</sup> <a name="spotMaxPricePercentageOverLowestPrice" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```typescript
public readonly spotMaxPricePercentageOverLowestPrice: number;
```

- *Type:* number

---

##### `totalLocalStorageGb`<sup>Required</sup> <a name="totalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```typescript
public readonly totalLocalStorageGb: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `vCpuCount`<sup>Required</sup> <a name="vCpuCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.vCpuCount"></a>

```typescript
public readonly vCpuCount: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.max">max</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.min">min</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.max"></a>

```typescript
public readonly max: number;
```

- *Type:* number

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.min"></a>

```typescript
public readonly min: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.licenseConfigurationArn">licenseConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `licenseConfigurationArn`<sup>Required</sup> <a name="licenseConfigurationArn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```typescript
public readonly licenseConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.autoRecovery">autoRecovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoRecovery`<sup>Required</sup> <a name="autoRecovery" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```typescript
public readonly autoRecovery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpEndpoint">httpEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpProtocolIpv6">httpProtocolIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpPutResponseHopLimit">httpPutResponseHopLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpTokens">httpTokens</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.instanceMetadataTags">instanceMetadataTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpEndpoint`<sup>Required</sup> <a name="httpEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpEndpoint"></a>

```typescript
public readonly httpEndpoint: string;
```

- *Type:* string

---

##### `httpProtocolIpv6`<sup>Required</sup> <a name="httpProtocolIpv6" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```typescript
public readonly httpProtocolIpv6: string;
```

- *Type:* string

---

##### `httpPutResponseHopLimit`<sup>Required</sup> <a name="httpPutResponseHopLimit" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```typescript
public readonly httpPutResponseHopLimit: number;
```

- *Type:* number

---

##### `httpTokens`<sup>Required</sup> <a name="httpTokens" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpTokens"></a>

```typescript
public readonly httpTokens: string;
```

- *Type:* string

---

##### `instanceMetadataTags`<sup>Required</sup> <a name="instanceMetadataTags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```typescript
public readonly instanceMetadataTags: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout">tcpEstablishedTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout">udpStreamTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout">udpTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tcpEstablishedTimeout`<sup>Required</sup> <a name="tcpEstablishedTimeout" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout"></a>

```typescript
public readonly tcpEstablishedTimeout: number;
```

- *Type:* number

---

##### `udpStreamTimeout`<sup>Required</sup> <a name="udpStreamTimeout" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout"></a>

```typescript
public readonly udpStreamTimeout: number;
```

- *Type:* number

---

##### `udpTimeout`<sup>Required</sup> <a name="udpTimeout" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout"></a>

```typescript
public readonly udpTimeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">enaSrdUdpEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enaSrdUdpEnabled`<sup>Required</sup> <a name="enaSrdUdpEnabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```typescript
public readonly enaSrdUdpEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">enaSrdEnabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">enaSrdUdpSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enaSrdEnabled`<sup>Required</sup> <a name="enaSrdEnabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```typescript
public readonly enaSrdEnabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enaSrdUdpSpecification`<sup>Required</sup> <a name="enaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```typescript
public readonly enaSrdUdpSpecification: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.ipv4Prefix">ipv4Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4Prefix`<sup>Required</sup> <a name="ipv4Prefix" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.ipv4Prefix"></a>

```typescript
public readonly ipv4Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.ipv6Prefix">ipv6Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv6Prefix`<sup>Required</sup> <a name="ipv6Prefix" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.ipv6Prefix"></a>

```typescript
public readonly ipv6Prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associateCarrierIpAddress</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associatePublicIpAddress">associatePublicIpAddress</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.connectionTrackingSpecification">connectionTrackingSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deviceIndex">deviceIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.enaSrdSpecification">enaSrdSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.interfaceType">interfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4PrefixCount">ipv4PrefixCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4Prefixes">ipv4Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6AddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6PrefixCount">ipv6PrefixCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Prefixes">ipv6Prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkCardIndex">networkCardIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.primaryIpv6">primaryIpv6</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddresses">privateIpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">secondaryPrivateIpAddressCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `associateCarrierIpAddress`<sup>Required</sup> <a name="associateCarrierIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```typescript
public readonly associateCarrierIpAddress: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `associatePublicIpAddress`<sup>Required</sup> <a name="associatePublicIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```typescript
public readonly associatePublicIpAddress: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `connectionTrackingSpecification`<sup>Required</sup> <a name="connectionTrackingSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.connectionTrackingSpecification"></a>

```typescript
public readonly connectionTrackingSpecification: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference</a>

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deviceIndex"></a>

```typescript
public readonly deviceIndex: number;
```

- *Type:* number

---

##### `enaSrdSpecification`<sup>Required</sup> <a name="enaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```typescript
public readonly enaSrdSpecification: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `interfaceType`<sup>Required</sup> <a name="interfaceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.interfaceType"></a>

```typescript
public readonly interfaceType: string;
```

- *Type:* string

---

##### `ipv4PrefixCount`<sup>Required</sup> <a name="ipv4PrefixCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```typescript
public readonly ipv4PrefixCount: number;
```

- *Type:* number

---

##### `ipv4Prefixes`<sup>Required</sup> <a name="ipv4Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```typescript
public readonly ipv4Prefixes: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList</a>

---

##### `ipv6AddressCount`<sup>Required</sup> <a name="ipv6AddressCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```typescript
public readonly ipv6AddressCount: number;
```

- *Type:* number

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList</a>

---

##### `ipv6PrefixCount`<sup>Required</sup> <a name="ipv6PrefixCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```typescript
public readonly ipv6PrefixCount: number;
```

- *Type:* number

---

##### `ipv6Prefixes`<sup>Required</sup> <a name="ipv6Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```typescript
public readonly ipv6Prefixes: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList</a>

---

##### `networkCardIndex`<sup>Required</sup> <a name="networkCardIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```typescript
public readonly networkCardIndex: number;
```

- *Type:* number

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `primaryIpv6`<sup>Required</sup> <a name="primaryIpv6" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.primaryIpv6"></a>

```typescript
public readonly primaryIpv6: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```typescript
public readonly privateIpAddresses: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList</a>

---

##### `secondaryPrivateIpAddressCount`<sup>Required</sup> <a name="secondaryPrivateIpAddressCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```typescript
public readonly secondaryPrivateIpAddressCount: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```typescript
public readonly primary: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```typescript
public readonly privateIpAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.capacityReservationSpecification">capacityReservationSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.cpuOptions">cpuOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creditSpecification">creditSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiStop">disableApiStop</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiTermination">disableApiTermination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ebsOptimized">ebsOptimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticGpuSpecifications">elasticGpuSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticInferenceAccelerators">elasticInferenceAccelerators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.enclaveOptions">enclaveOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.hibernationOptions">hibernationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.iamInstanceProfile">iamInstanceProfile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceInitiatedShutdownBehavior">instanceInitiatedShutdownBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceMarketOptions">instanceMarketOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceRequirements">instanceRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.kernelId">kernelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.licenseSpecifications">licenseSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.maintenanceOptions">maintenanceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.metadataOptions">metadataOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.networkInterfaces">networkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.privateDnsNameOptions">privateDnsNameOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ramDiskId">ramDiskId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData">DataAwsccEc2LaunchTemplateLaunchTemplateData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Required</sup> <a name="blockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList</a>

---

##### `capacityReservationSpecification`<sup>Required</sup> <a name="capacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.capacityReservationSpecification"></a>

```typescript
public readonly capacityReservationSpecification: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference</a>

---

##### `cpuOptions`<sup>Required</sup> <a name="cpuOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.cpuOptions"></a>

```typescript
public readonly cpuOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference</a>

---

##### `creditSpecification`<sup>Required</sup> <a name="creditSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creditSpecification"></a>

```typescript
public readonly creditSpecification: DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference</a>

---

##### `disableApiStop`<sup>Required</sup> <a name="disableApiStop" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiStop"></a>

```typescript
public readonly disableApiStop: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `disableApiTermination`<sup>Required</sup> <a name="disableApiTermination" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiTermination"></a>

```typescript
public readonly disableApiTermination: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `ebsOptimized`<sup>Required</sup> <a name="ebsOptimized" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ebsOptimized"></a>

```typescript
public readonly ebsOptimized: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `elasticGpuSpecifications`<sup>Required</sup> <a name="elasticGpuSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticGpuSpecifications"></a>

```typescript
public readonly elasticGpuSpecifications: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList</a>

---

##### `elasticInferenceAccelerators`<sup>Required</sup> <a name="elasticInferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticInferenceAccelerators"></a>

```typescript
public readonly elasticInferenceAccelerators: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList</a>

---

##### `enclaveOptions`<sup>Required</sup> <a name="enclaveOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.enclaveOptions"></a>

```typescript
public readonly enclaveOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference</a>

---

##### `hibernationOptions`<sup>Required</sup> <a name="hibernationOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.hibernationOptions"></a>

```typescript
public readonly hibernationOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference</a>

---

##### `iamInstanceProfile`<sup>Required</sup> <a name="iamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.iamInstanceProfile"></a>

```typescript
public readonly iamInstanceProfile: DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference</a>

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `instanceInitiatedShutdownBehavior`<sup>Required</sup> <a name="instanceInitiatedShutdownBehavior" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceInitiatedShutdownBehavior"></a>

```typescript
public readonly instanceInitiatedShutdownBehavior: string;
```

- *Type:* string

---

##### `instanceMarketOptions`<sup>Required</sup> <a name="instanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceMarketOptions"></a>

```typescript
public readonly instanceMarketOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference</a>

---

##### `instanceRequirements`<sup>Required</sup> <a name="instanceRequirements" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceRequirements"></a>

```typescript
public readonly instanceRequirements: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference</a>

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `kernelId`<sup>Required</sup> <a name="kernelId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.kernelId"></a>

```typescript
public readonly kernelId: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `licenseSpecifications`<sup>Required</sup> <a name="licenseSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.licenseSpecifications"></a>

```typescript
public readonly licenseSpecifications: DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList</a>

---

##### `maintenanceOptions`<sup>Required</sup> <a name="maintenanceOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.maintenanceOptions"></a>

```typescript
public readonly maintenanceOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference</a>

---

##### `metadataOptions`<sup>Required</sup> <a name="metadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.metadataOptions"></a>

```typescript
public readonly metadataOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.monitoring"></a>

```typescript
public readonly monitoring: DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference</a>

---

##### `networkInterfaces`<sup>Required</sup> <a name="networkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.networkInterfaces"></a>

```typescript
public readonly networkInterfaces: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.placement"></a>

```typescript
public readonly placement: DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference</a>

---

##### `privateDnsNameOptions`<sup>Required</sup> <a name="privateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.privateDnsNameOptions"></a>

```typescript
public readonly privateDnsNameOptions: DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference</a>

---

##### `ramDiskId`<sup>Required</sup> <a name="ramDiskId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ramDiskId"></a>

```typescript
public readonly ramDiskId: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `tagSpecifications`<sup>Required</sup> <a name="tagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList</a>

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateData;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData">DataAwsccEc2LaunchTemplateLaunchTemplateData</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.affinity">affinity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostResourceGroupArn">hostResourceGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.partitionNumber">partitionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.spreadDomain">spreadDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.tenancy">tenancy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.affinity"></a>

```typescript
public readonly affinity: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `hostResourceGroupArn`<sup>Required</sup> <a name="hostResourceGroupArn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostResourceGroupArn"></a>

```typescript
public readonly hostResourceGroupArn: string;
```

- *Type:* string

---

##### `partitionNumber`<sup>Required</sup> <a name="partitionNumber" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.partitionNumber"></a>

```typescript
public readonly partitionNumber: number;
```

- *Type:* number

---

##### `spreadDomain`<sup>Required</sup> <a name="spreadDomain" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.spreadDomain"></a>

```typescript
public readonly spreadDomain: string;
```

- *Type:* string

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.tenancy"></a>

```typescript
public readonly tenancy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enableResourceNameDnsAaaaRecord</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enableResourceNameDnsARecord</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.hostnameType">hostnameType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableResourceNameDnsAaaaRecord`<sup>Required</sup> <a name="enableResourceNameDnsAaaaRecord" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```typescript
public readonly enableResourceNameDnsAaaaRecord: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableResourceNameDnsARecord`<sup>Required</sup> <a name="enableResourceNameDnsARecord" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```typescript
public readonly enableResourceNameDnsARecord: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `hostnameType`<sup>Required</sup> <a name="hostnameType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```typescript
public readonly hostnameType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags</a>

---


### DataAwsccEc2LaunchTemplateTagSpecificationsList <a name="DataAwsccEc2LaunchTemplateTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications">DataAwsccEc2LaunchTemplateTagSpecifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```typescript
public readonly tags: DataAwsccEc2LaunchTemplateTagSpecificationsTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateTagSpecificationsTagsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateTagSpecifications;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications">DataAwsccEc2LaunchTemplateTagSpecifications</a>

---


### DataAwsccEc2LaunchTemplateTagSpecificationsTagsList <a name="DataAwsccEc2LaunchTemplateTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference <a name="DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEc2LaunchTemplate } from '@cdktn/provider-awscc'

new dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags">DataAwsccEc2LaunchTemplateTagSpecificationsTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEc2LaunchTemplateTagSpecificationsTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags">DataAwsccEc2LaunchTemplateTagSpecificationsTags</a>

---



